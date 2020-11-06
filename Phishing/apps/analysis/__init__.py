from flask import Blueprint

"""
The analysis Blueprint handles the creation, modification, deletion,
and viewing of analysis for this application.
"""

analysis_blueprint = Blueprint('analysis', __name__)

from . import routes
