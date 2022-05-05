class Person
  def initialize(name, age)
    @age = age
    @name = name
   end
    def info
       "#{@name}s age is #{@age}"
    end
end

let john = new Person('john', 34)

console.log(john.info)