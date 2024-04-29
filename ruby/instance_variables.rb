class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def name=(new_name)
    @name = new_name
  end
end

p = Person.new('L. Ron')
puts p.name

p.name = 'New Name'
puts p.name