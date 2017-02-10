class AddAttachmentAvatarToCountries < ActiveRecord::Migration
  def self.up
    change_table :countries do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :countries, :avatar
  end
end
