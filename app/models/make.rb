class Make < ApplicationRecord
	belongs_to :user
	has_many :places
end
