import uuid

def create_quarters(start_year: int, start_season: int, end_year: int, end_season: int):
    quarters = []
    SEASON_TO_FRONTEND_SEASON_ENUM = ["WINTER", "SPRING", "SUMMER", "FALL"]

    FALL = 3
    WINTER = 0
    for year in range(start_year, end_year + 1):
        stop_season = end_season if year == end_year else FALL
        begin_season = start_season if year == start_year else WINTER
        for season in range(begin_season, stop_season + 1):
            quarters.append({'id': str(uuid.uuid4()), 'season': SEASON_TO_FRONTEND_SEASON_ENUM[season], 'year': year})
    return quarters