# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :pronouns
      t.string :email
      t.string :password_digest
      t.string :website

      t.timestamps
    end
  end
end
