# frozen_string_literal: true

class ProductsController < ApplicationController
  before_action :set_product, only: %i[update destroy]
  before_action :authorize_request, only: %i[update create destroy]

  # GET /products
  def index
    @products = Product.joins(:user).select('products.*, users.username').order('updated_at DESC')
    puts @products.name
    render json: @products
  end

  # GET /products/1
  def show
    @product = Product.joins(:user, :category).select('products.*, users.username, users.email, categories.name as category_name').find(params[:id])
    render json: @product
  end

  # GET /products/byuser/1
  def products_by_user
    @products = Product.joins(:user).select('products.*, users.username').where("user_id = #{params[:id]}").order('updated_at DESC')
    render json: @products
  end

  # GET /products/bycategory/1
  def products_by_category
    @products = Product.joins(:user).select('products.*, users.username').where("category_id = #{params[:id]}").order('updated_at DESC')
    render json: @products
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    @product.user = @current_user

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def product_params
    params.require(:product).permit(:image_url, :name, :price, :category_id, :user_id)
  end
end
