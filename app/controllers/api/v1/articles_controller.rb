#Module api
module Api
    module V1
      class ArticlesController < ApplicationController
        def with_users
          articles = Article.includes(:user).all
          render json: articles.to_json(include: { user: { only: [:id, :username, :email] } })
        end
      end
    end
  end