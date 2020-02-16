class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :title
      t.string :description
      t.string :userId #non ruby snake case to match js id
      t.boolean :admin, default: false, null: false
      t.timestamps
    end
  end
end
