# Design Patterns

## What are design patterns?

Design patterns are solutions to common problems that occur in software design. They are not complete designs of a system, but rather a template for how to solve a problem. They are often used to communicate design ideas between developers. They are also a great way to ensure that your code is maintainable and extensible.

# Types of design patterns

There are three main types of design patterns:

- Creational
- Structural
- Behavioral

## Creational

Creational design patterns are concerned with the creation of objects. They are used to create objects in a way that is suitable for a given situation without revealing the creation method. The normal approach for creating an object might lead to complexities in the design of a project. These patterns allow flexibility in deciding which objects need to be created for a specific use case by providing control over the creation process.

## Structural

## Behavioral

# Creational Design Patterns

## Factory

The factory pattern is a creational pattern that provides a template that can be used to create objects. It is used in complex situations where the type of the object required varies and needs to be specified in each case. it provides a generic interface that delegates the object creation responsibility to the corresponding subclass.

### When to use the factory pattern

- When the type of objects required cannot be anticipated beforehand
- When you want to provide a generic interface for creating objects
- When you want to hide the creation logic from the client
