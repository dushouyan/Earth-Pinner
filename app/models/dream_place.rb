class DreamPlace < ApplicationRecord
	validates :place_id, uniqueness: true
end
