class User < ApplicationRecord

  attr_reader :password
  
  validates :username, uniqueness: true, allow_nil: true
  validates :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  # has_secure_password

  after_initialize :ensure_session_token, :username


  def self.find_by_credentials(user_params)
    user = User.find_by(email: user_params[:email])
    if user && user.is_password?(user_params[:password])
      user
    else
      nil
    end
  end

  def username=(username)
    username == '' ? self.username = nil : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end


  
end
