class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end

p = Person.new('L. Ron')
puts p.name