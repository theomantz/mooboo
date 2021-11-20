class User < ApplicationRecord
  attr_reader :password

  validates :username, uniqueness: true, allow_nil: true, length: { maximum: 20 }
  validates :location, length: { maximum: 100 }
  validates :description, length: { maximum: 200 }
  validates :password_digest, presence: true
  validates :email,
            format: { with: /\A(.+)@(.+)\z/, message: 'Invalid' },
            uniqueness: { case_sensitive: false },
            length: { minimum: 4, maximum: 100 }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  after_commit :first_board, :assign_username, if: :persisted?

  has_one_attached :photo

  has_many :pins

  has_many :boards

  has_many :follow_followers, class_name: :Follow, foreign_key: :followee_id, dependent: :destroy
  has_many :followers, through: :follow_followers, source: :follower

  has_many :following, class_name: :Follow, foreign_key: :follower_id, dependent: :destroy
  has_many :followees, through: :following, source: :followee

  def self.find_by_credentials(user_params)
    user = User.find_by(email: user_params[:email])
    user if user && user.is_password?(user_params[:password])
  end

  def assign_username
    if username == '' || !username
      self.username = find_unique_username('moo')
      save!
    else
      true
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save
    self.session_token
  end

  def first_board
    quick_save = boards.where(title: 'Quick Save')
    if quick_save.empty?
      quick_save = Board.create(user_id: id, title: 'Quick Save', description: 'A catchall board', private: false)
      boards << quick_save
      save
    end
  end

  def find_unique_username(username)
    taken_usernames = User
                      .where('username LIKE ?', "#{username}%")
                      .pluck(:username)

    return username unless taken_usernames.include?(username)

    count = 2
    while true
      new_username = "#{username}_#{count}"
      return new_username unless taken_usernames.include?(new_username)

      count += 1
    end
  end
end
