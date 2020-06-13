# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = [
  'Textiles',
  'Appliqués',
  'Crocheting',
  'Embroidery',
  'Felt-making',
  'Knitting',
  'Lace-making',
  'Macramé',
  'Quilting',
  'Tapestry',
  'Weaving',
  'Grafitti',
  'Drawing',
  'Painting',
  'Poster',
  'Pottery',
  'Photography',
  'Garments',
  'Ceramic',
  'Sculpture',
  'Calligraphy',
  'Glass Art',
  'Flower Crafts',
  'Leatherwork',
  'Mixed Media',
  'Needlework',
  'Paper Craft',
  'Wood Craft',
  'Stone Craft',
  'Metal Craft'
]

categories.sort!
categories.each do |name|
  category = Category.find_or_initialize_by(name: name)
  category.save!
end
