class RoutinesController < ApplicationController

  def create
    @routine = Routine.new(routine_params)
    if @routine.save
        render json: @routine
        # if it exists, then render json and send over the newly created
      else
        render json: {error: 'Error creating routine'}
      end
  end

  def index
    @routines = Routine.all
    render json: @routines, include: ['exercises']
    # fetch request for all routines
  end


  def show
    @routine = Routine.find_by(id: params[:id])
    render json: @routine
  end

  def update
    @routine = Routine.find_by(id: params[:id])
    @routine.update(routine_params)
    @routine.save
    render json: @routine, include: ['exercises']
  end


  def destroy
    @routine = Routine.find(params[:id])
    @routine.destroy
    render json: @routine
  end

  private

  def  routine_params
    params.require(:routine).permit(:title,:start_date,:days,:body_weight)
  end
  # permit these attributes

end
