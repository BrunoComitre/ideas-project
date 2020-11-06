from . import analysis_blueprint


################
#### routes ####
################

@analysis_blueprint.route('/analysis')
def index():
    return 'Welcome to Analysis'