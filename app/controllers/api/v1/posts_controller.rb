class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :setPost, only: [:edit, :update]

  def index
    @posts = Post.all.order("created_at DESC")

    render json: @posts
  end

  def edit
    render json: @post, status: :ok
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :ok
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post, status: :ok
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def setPost
    @post = Post.find(params[:id])
  end

  def post_params
    return params.require(:post).permit(:title, :body, :images_data) if params[:post].present?

    params.permit(:title, :body, :images_data)
  end
end
