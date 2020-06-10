# frozen_string_literal: true

class User < ApplicationRecord
  has_many :products

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
