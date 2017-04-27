class Place < ApplicationRecord 
	has_and_belongs_to_many :dreams
	belongs_to :make  
	has_many :experiences
	belongs_to :country

	validates :name, presence: true, uniqueness: true
	validates :address, presence: true, uniqueness: true
	validates :avatar, presence: true
	has_attached_file :avatar,  source_file_options: { all: '-auto-orient' }, styles: { thumb: "200x200>" }
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
	validates_attachment_size :avatar, :less_than => 3.megabytes 

	before_validation :pretty_url, :name_title

	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end

	def name_title 
		self.name = self.name.titleize
	end 

	def waterfall 
		testwaterfall = nil
			["Falls", "Waterfall", "Waterfalls"].any? { |waterfall| 
				if self.name.include? waterfall
			 		testwaterfall = true
				else 
					testwaterfall = false
				end
			}	

		self.waterfall = testwaterfall
	end

	geocoded_by :address	
	after_validation :geocode, :waterfall  
 

end
