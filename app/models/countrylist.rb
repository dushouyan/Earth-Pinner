class Countrylist < ApplicationRecord
	has_and_belongs_to_many :countries, -> { distinct }
end
