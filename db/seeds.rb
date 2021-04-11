# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all

demo = User.create({ email: 'demo@moooboo.io', password: 'password' })
demo1 = User.create({ email: 'theo@moooboo.io', password: 'password' })
demo2 = User.create({ email: 'steve@moooboo.io', password: 'password' })
demo3 = User.create({ email: 'mary@moooboo.io', password: 'password' })


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

pin11 = Pin.new({ title: 'sixteen miles out', description: 'another sample', uploader_id: userIds.sample() })
file11 = open('https://unsplash.com/photos/fZh3ykgRVEg/download?force=true')
pin11.photo.attach(io: file11, filename: 'seed11.jpg')
pin11.save!

pin12 = Pin.new({ title: 'hello im nik', description: 'another sample', uploader_id: userIds.sample() })
file12 = open('https://unsplash.com/photos/3LHfA2uASj0/download?force=true')
pin12.photo.attach(io: file12, filename: 'seed12.jpg')
pin12.save!

pin13 = Pin.new({ title: 'rashid', description: 'another sample', uploader_id: userIds.sample() })
file13 = open('https://unsplash.com/photos/F8twbonnSmE/download?force=true')
pin13.photo.attach(io: file13, filename: 'seed13.jpg')
pin13.save!

pin14 = Pin.new({ title: 'erik mclean', description: 'bee kind', uploader_id: userIds.sample() })
file14 = open('https://unsplash.com/photos/XrMjH2xe4aw/download?force=true')
pin14.photo.attach(io: file14, filename: 'seed14.jpg')
pin14.save!

pin15 = Pin.new({ title: 'colin lloyd', description: 'another sample', uploader_id: userIds.sample() })
file15 = open('https://unsplash.com/photos/6yGlzeUKJVw/download?force=true')
pin15.photo.attach(io: file15, filename: 'seed15.jpg')
pin15.save!

pin16 = Pin.new({ title: 'klugzy wugzy', description: 'another sample', uploader_id: userIds.sample() })
file16 = open('https://unsplash.com/photos/I-PxneZg_1A/download?force=true')
pin16.photo.attach(io: file16, filename: 'seed16.jpg')
pin16.save!

pin17 = Pin.new({ title: 'michael annaert', description: 'another sample', uploader_id: userIds.sample() })
file17 = open('https://unsplash.com/photos/8FW_GB7G_nU/download?force=true')
pin17.photo.attach(io: file17, filename: 'seed17.jpg')
pin17.save!

pin18 = Pin.new({ title: 'giorgio travato', description: 'another sample', uploader_id: userIds.sample() })
file18 = open('https://unsplash.com/photos/WZW9JHOECP4/download?force=true')
pin18.photo.attach(io: file18, filename: 'seed18.jpg')
pin18.save!

pin19 = Pin.new({ title: 'spacejoy', description: 'another sample', uploader_id: userIds.sample() })
file19 = open('https://unsplash.com/photos/TbWzzDaqgRE/download?force=true')
pin19.photo.attach(io: file19, filename: 'seed19.jpg')
pin19.save!

pin20 = Pin.new({ title: 'Charles Etoroma', description: 'another sample', uploader_id: userIds.sample() })
file20 = open('https://unsplash.com/photos/ETHj9rhBn9M/download?force=true')
pin20.photo.attach(io: file20, filename: 'seed20.jpg')
pin20.save!

pin21 = Pin.new({ title: 'flower girl', description: 'another sample', uploader_id: userIds.sample() })
file21 = open('https://unsplash.com/photos/lmjSvbSXSz4/download?force=true')
pin21.photo.attach(io: file21, filename: 'seed21.jpg')
pin21.save!

pin22 = Pin.new({ title: 'Eric Muhr', description: 'another sample', uploader_id: userIds.sample() })
file22 = open('https://unsplash.com/photos/BrLWLBYgkds/download?force=true')
pin22.photo.attach(io: file22, filename: 'seed22.jpg')
pin22.save!

pin23 = Pin.new({ title: 'Eric Muhr', description: 'another sample', uploader_id: userIds.sample() })
file23 = open('https://unsplash.com/photos/BrLWLBYgkds/download?force=true')
pin23.photo.attach(io: file23, filename: 'seed23.jpg')
pin23.save!

pin23 = Pin.new({ title: 'Vadim Sadovski', description: 'another sample', uploader_id: userIds.sample() })
file23 = open('https://unsplash.com/photos/95heT0jBlIk/download?force=true')
pin23.photo.attach(io: file23, filename: 'seed23.jpg')
pin23.save!

pin24 = Pin.new({ title: 'Anthony Melone', description: 'another sample', uploader_id: userIds.sample() })
file24 = open('https://unsplash.com/photos/enOAf3cmQww/download?force=true')
pin24.photo.attach(io: file24, filename: 'seed24.jpg')
pin24.save!

pin25 = Pin.new({ title: 'Timo Volz', description: 'another sample', uploader_id: userIds.sample() })
file25 = open('https://unsplash.com/photos/UwsvK4p0teo/download?force=true')
pin25.photo.attach(io: file25, filename: 'seed25.jpg')
pin25.save!

pin26 = Pin.new({ title: 'Pille-Riin Priske', description: 'another sample', uploader_id: userIds.sample() })
file26 = open('https://unsplash.com/photos/z_MwDqdYFLU/download?force=true')
pin26.photo.attach(io: file26, filename: 'seed26.jpg')
pin26.save!

pin27 = Pin.new({ title: 'Diogo Fagundes', description: 'another sample', uploader_id: userIds.sample() })
file27 = open('https://unsplash.com/photos/J38PQrWoFMU/download?force=true')
pin27.photo.attach(io: file27, filename: 'seed27.jpg')
pin27.save!

pin28 = Pin.new({ title: 'Leo Chane', description: 'another sample', uploader_id: userIds.sample() })
file28 = open('https://unsplash.com/photos/fEWdAW2qvlo/download?force=true')
pin28.photo.attach(io: file28, filename: 'seed28.jpg')
pin28.save!

pin29 = Pin.new({ title: 'Sasha Zlochevskaya', description: 'another sample', uploader_id: userIds.sample() })
file29 = open('https://unsplash.com/photos/8ABn7BbmukE/download?force=true')
pin29.photo.attach(io: file29, filename: 'seed29.jpg')
pin29.save!

pin30 = Pin.new({ title: 'eberhard grossgasteiger', description: 'another sample', uploader_id: userIds.sample() })
file30 = open('https://unsplash.com/photos/4AWDA2WWCn0/download?force=true')
pin30.photo.attach(io: file30, filename: 'seed30.jpg')
pin30.save!


# Boards

board1 = Board.create({ user_id: demo.id, title: 'Scenery' })
board2 = Board.create({ user_id: demo.id, title: 'Architecture' })
board3 = Board.create({ user_id: demo.id, title: 'Plants' })
board4 = Board.create({ user_id: demo.id, title: 'Birds' })

# Add pins to boards

pins = Pin.all
boards = Board.all

pins.each do |pin|
  boards.sample().pins << pin
end