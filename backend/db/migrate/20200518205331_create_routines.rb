class CreateRoutines < ActiveRecord::Migration[5.2]
  def change
    create_table :routines do |t|
      t.string :title
      t.date :start_date
      t.string :days
      t.integer :body_weight

      t.timestamps
    end
  end
end
