class Place < ApplicationRecord 
	has_and_belongs_to_many :dreams
	belongs_to :make  
	has_many :experiences

	validates :name, presence: true, uniqueness: true
	validates :address, presence: true
	validates :country, presence: true
	validates :longitude, presence: true
	validates :latitude, presence: true
	has_attached_file :avatar, styles: { thumb: "200x200>" }
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

	before_validation :pretty_url, :name_title

	def pretty_url
		self.url = self.name.strip.downcase.gsub(' ','-')
	end

	def name_title 
		self.name = self.name.titleize
	end 

	geocoded_by :address	
	after_validation :geocode   

	def self.search(search)
  		where("name LIKE ? OR address LIKE ? OR country LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%",) 
	end


end
