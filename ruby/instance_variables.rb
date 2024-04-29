class Person

  def initialize(name)
    @name = name
  end
  
# Task 1
  def name
    @name
  end
end

p = Person.new('L. Ron')
puts p.name