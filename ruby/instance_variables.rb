class Person
  attr_reader :name
  attr_writer :name

  def initialize(name)
    @name = name
  end

p = Person.new('L. Ron')
puts p.name

p.name = 'New Name'
puts p.name