class Api::V1::PostsController < ApplicationController
  skip_forgery_protection
  def index
    @posts = Post.all.order("created_at DESC")

    render json: @posts
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :ok
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def post_params
    params.require(:post).permit!
  end
end
