class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :type_of_exercise
      t.string :equipment
      t.integer :routine_id
      t.integer :reps
      t.integer :sets

      t.timestamps
    end
  end
end
