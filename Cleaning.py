import pandas as pd
from datetime import datetime
import ast
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


def format_date(date) :
    # Only taking movie release year
    date = date[:4]
    return date

# Just keep dates between the valide bounds (1677-2262)
def filter_out_of_bounds(date):
    try:
        pd.to_datetime(date)
        return True  
    except pd.errors.OutOfBoundsDatetime:
        return False  

def GetCleanedData(df):
    df = df.copy()
    
    # Dropping all missing values for Movie country, languages and genres
    df = df[(df['Movie country'] != "{}") & (df['Movie languages'] != "{}") & (df['Movie genres'] != "{}")]

    #  Transforming dictionary-like string representations into simpler formats
    df['Movie country'] = df['Movie country'].apply(lambda x: list(ast.literal_eval(x).values())[0])
    df['Movie genres'] = df['Movie genres'].apply(lambda x: list(ast.literal_eval(x).values())[0])
    df['Movie languages'] = df['Movie languages'].apply(lambda x: list(ast.literal_eval(x).values()))

    df_date_revenue_clean = df.dropna(subset=['Movie release date', 'Movie box office revenue']).copy()
    df_date_clean = df.dropna(subset=['Movie release date']).copy()
    df_date_revenue_runtime_clean = df.dropna(subset=['Movie release date', 'Movie box office revenue', 'Movie runtime']).copy()

    df_date_revenue_clean.loc[:, 'Movie release date'] = df_date_revenue_clean['Movie release date'].apply(format_date)
    df_date_clean.loc[:, 'Movie release date'] = df_date_clean['Movie release date'].apply(format_date)
    df_date_revenue_runtime_clean.loc[:, 'Movie release date'] = df_date_revenue_runtime_clean['Movie release date'].apply(format_date)

    df_date_revenue_clean = df_date_revenue_clean[df_date_revenue_clean['Movie release date'].apply(filter_out_of_bounds)]
    df_date_clean = df_date_clean[df_date_clean['Movie release date'].apply(filter_out_of_bounds)]
    df_date_revenue_runtime_clean = df_date_revenue_runtime_clean[df_date_revenue_runtime_clean['Movie release date'].apply(filter_out_of_bounds)]

    return df_date_clean, df_date_revenue_clean, df_date_revenue_runtime_clean

