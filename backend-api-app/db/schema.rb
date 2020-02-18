# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_16_170056) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reports", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "userId"
    t.string "incidentLocation"
    t.string "tripDate"
    t.string "dispatchTime"
    t.string "onSceneTime"
    t.string "narrative"
    t.string "arrivalDestTime"
    t.string "leftSceneTime"
    t.string "backInServiceTime"
    t.string "startMiles"
    t.string "endMiles"
    t.string "totalMiles"
    t.string "medicSig"
    t.boolean "admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
