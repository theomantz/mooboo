# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all

demo = User.create({ email: 'demo@moooboo.io', password: 'mooboo4ever' })
demo1 = User.create({ email: 'theo@moooboo.io', password: 'mooboo4ever' })
demo2 = User.create({ email: 'steve@moooboo.io', password: 'mooboo4ever' })
demo3 = User.create({ email: 'mary@moooboo.io', password: 'mooboo4ever' })


userIds = [demo.id, demo1.id, demo2.id, demo3.id]

pin1 = Pin.new({ title: 'colin lloyd', description: 'available for hire', uploader_id: userIds.sample() })
file = open('https://unsplash.com/photos/Opzn04Fsv1A/download?force=true')
pin1.photo.attach(io: file, filename: 'seed1.jpg')
pin1.save!

pin2 = Pin.new({ title: 'eric mclean', description: 'another sample', uploader_id: userIds.sample() })
file2 = open('https://unsplash.com/photos/Gur1H1B4t5s/download?force=true')
pin2.photo.attach(io: file2, filename: 'seed2.jpg')
pin2.save!

pin3 = Pin.new({ title: 'solen feyissa', description: 'another sample', uploader_id: userIds.sample() })
file3 = open('https://unsplash.com/photos/2klIc7X8p4o/download?force=true')
pin3.photo.attach(io: file3, filename: 'seed3.jpg')
pin2.save!

pin4 = Pin.new({ title: 'melnychuck nataliya', description: 'another sample', uploader_id: userIds.sample() })
file4 = open('https://unsplash.com/photos/tnWjbdPmk1M/download?force=true')
pin4.photo.attach(io: file4, filename: 'seed4.jpg')
pin4.save!

pin5 = Pin.new({ title: 'alex ifti', description: 'another sample', uploader_id: userIds.sample() })
file5 = open('https://unsplash.com/photos/zh0rb-rvnbM/download?force=true')
pin5.photo.attach(io: file5, filename: 'seed5.jpg')
pin5.save!

pin6 = Pin.new({ title: 'damien schnorhk', description: 'another sample', uploader_id: userIds.sample() })
file6 = open('https://unsplash.com/photos/lDjHEFQcJ20/download?force=true')
pin6.photo.attach(io: file6, filename: 'seed6.jpg')
pin6.save!


pin7 = Pin.new({ title: 'pille-riin priske', description: 'another sample', uploader_id: userIds.sample() })
file7 = open('https://unsplash.com/photos/nW0zqz28VXA/download?force=true')
pin7.photo.attach(io: file7, filename: 'seed7.jpg')
pin7.save!

pin8 = Pin.new({ title: 'cameron whitney', description: 'another sample', uploader_id: userIds.sample() })
file8 = open('https://unsplash.com/photos/p7wApsetKeI/download?force=true')
pin8.photo.attach(io: file8, filename: 'seed8.jpg')
pin8.save!

pin9 = Pin.new({ title: 'martin woortman', description: 'another sample', uploader_id: userIds.sample() })
file9 = open('https://unsplash.com/photos/NzW5ytrqi34/download?force=true')
pin9.photo.attach(io: file9, filename: 'seed9.jpg')
pin9.save!

pin10 = Pin.new({ title: 'finn whelen', description: 'another sample', uploader_id: userIds.sample() })
file10 = open('https://unsplash.com/photos/nTeOa45C_ok/download?force=true')
pin10.photo.attach(io: file10, filename: 'seed10.jpg')
pin10.save!