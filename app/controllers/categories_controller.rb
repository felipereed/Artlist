# frozen_string_literal: true

# this controller is responsible for retrieving categories from the database
class CategoriesController < ApplicationController
  before_action :set_category, only: %i[show update destroy]

  # GET /categories
  def index
    @categories = Category.order(:name)

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def category_params
    params.require(:category).permit(:name)
  end
end
