# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

routine = Routine.create(title: 'Back Routine', start_date: Date.today, days: 'Monday,Wednesday,Friday', body_weight: 170)
exercise = Exercise.create(name: 'deadlift', type_of_exercise: 'pull', equipment: 'barbell', routine_id: 1, reps: 10, sets:4)
exercise_two = Exercise.create(name: 'rows', type_of_exercise: 'pull', equipment: 'dumbbell', routine_id: 1, reps: 10, sets:4)
