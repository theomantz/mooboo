# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users Seed:
# 15.times { User.create(email: Faker::Internet.email , password: 'password123' ) }
# End Users Seed


# Pins Seed
# user_ids = [1, 3, 17, 18, 
#   19, 20, 21, 22, 23, 24, 25, 
#   26, 27, 4, 28, 11, 29, 6, 7, 
#   8, 30, 12, 13, 9, 5, 14, 15, 
#   10, 16]

# 15.times { Pin.create(uploader_id: user_ids.sample(), title: 'sample pin', description: 'Lorum Ipsum' )}
# Pins Seed End