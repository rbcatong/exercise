class ChangeDateToDateTimeInRoutines < ActiveRecord::Migration[5.2]
  def change
    change_column :routines, :start_date, :datetime
  end
end
