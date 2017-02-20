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

ActiveRecord::Schema.define(version: 20170212165456) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "countries", force: :cascade do |t|
    t.string   "name"
    t.string   "capital"
    t.string   "currency"
    t.string   "population"
    t.string   "language"
    t.text     "visa"
    t.string   "url"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "countries_countrylists", id: false, force: :cascade do |t|
    t.integer "country_id",     null: false
    t.integer "countrylist_id", null: false
    t.index ["country_id", "countrylist_id"], name: "index_countries_countrylists_on_country_id_and_countrylist_id", using: :btree
    t.index ["countrylist_id", "country_id"], name: "index_countries_countrylists_on_countrylist_id_and_country_id", using: :btree
  end

  create_table "countrylists", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dreams", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dreams_places", id: false, force: :cascade do |t|
    t.integer "place_id", null: false
    t.integer "dream_id", null: false
    t.index ["dream_id", "place_id"], name: "index_dreams_places_on_dream_id_and_place_id", using: :btree
    t.index ["place_id", "dream_id"], name: "index_dreams_places_on_place_id_and_dream_id", using: :btree
  end

  create_table "experiences", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "place_id"
    t.string   "user_name"
    t.text     "review"
    t.integer  "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "makes", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string   "name"
    t.integer  "country_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "url"
    t.string   "address"
    t.string   "created_by"
    t.integer  "make_id"
    t.boolean  "approved"
    t.string   "website"
    t.string   "admission"
    t.text     "description"
    t.text     "arrive"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.boolean  "admin"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

end
