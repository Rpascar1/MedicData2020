class Api::V1::ReportsController < ApplicationController

  def index
    @reports = Report.all
    render json: @reports, status: 200
  end

  def show
    @report = Report.find(params[:id])
    render json: @report, status: 200
  end

  def create
    @report = Report.create(report_params)
    render json: @report, status: 200
  end

  def update
    @report = Report.find(params[:id])
    @report.update(report_params)
    render json: @report, status: 200
  end

  def destroy
    @report = Report.find(params[:id])
    @report.delete
    render json: {reportId: @report.id}
  end

  private

  def report_params
    params.require(:report).permit(
       :userId, :admin,
       :incidentLocation,:tripDate,
       :dispatchTime, :onSceneTime,
       :narrative, :arrivalDestTime,
       :leftSceneTime,:arrivalDestTime,
       :backInServiceTime,:startMiles, :endMiles,:totalMiles,:medicSig,
       :tripDate )
  end



end
