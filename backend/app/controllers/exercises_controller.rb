class ExercisesController < ApplicationController
  def create
    # create an exercise, attach it with routine id.
    @exercise = Exercise.new(exercise_params)
    @exercise.routine = Routine.find_by(id: params[:routine_id])
    @exercise.save
    render json: @exercise
  end

  def index
    @exercises = Exercise.all
    # fetch request for all exercises
    render json: @exercises
  end

  def show
    @exercise = Exercise.find_by(id: params[:id])
    render json: @exercise
  end

  def update
    @exercise = Exercise.find_by(id: params[:id])
    @exercise.update(exercise_params)
    render json: @exercise
  end

  def destroy
    @exercise = Exercise.find_by(id: params[:id])
    @exercise.destroy
    render json: @exercise
  end

  private
  def  exercise_params
    params.require(:exercise).permit(:name,:type_of_exercise,:equipment,:routine_id, :reps, :sets)
  end
  # permit these attributes
end
