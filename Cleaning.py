import pandas as pd
from datetime import datetime
import ast
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def format_date(date) :
    date = date[:4]
    return date


def GetCleanedData():
    PATH = 'src'
    header = ['Wikipedia movie ID', 'Freebase movie ID', 'Movie name', 'Movie release date', 'Movie box office revenue', 'Movie runtime', 
            'Movie languages', 'Movie country', 'Movie genres']
    df = pd.read_csv(PATH + '/movie.metadata.tsv', sep='\t', names=header, skipinitialspace=True)
    
    df = df[(df['Movie country'] != "{}") & (df['Movie languages'] != "{}") & (df['Movie genres'] != "{}")]

    df['Movie country'] = df['Movie country'].apply(lambda x: list(ast.literal_eval(x).values())[0])
    df['Movie genres'] = df['Movie genres'].apply(lambda x: list(ast.literal_eval(x).values()))
    df['Movie languages'] = df['Movie languages'].apply(lambda x: list(ast.literal_eval(x).values()))

    df_date_revenue_clean = df.dropna(subset=['Movie release date', 'Movie box office revenue'])
    df_date_clean = df.dropna(subset=['Movie release date'])
    df_date_revenue_runtime_clean = df.dropna(subset=['Movie release date', 'Movie box office revenue', 'Movie runtime'])

    df_date_revenue_clean['Movie release date'] = df_date_revenue_clean['Movie release date'].apply(format_date)
    df_date_clean['Movie release date'] = df_date_clean['Movie release date'].apply(format_date)
    df_date_revenue_runtime_clean['Movie release date'] = df_date_revenue_runtime_clean['Movie release date'].apply(format_date)

    return df_date_clean, df_date_revenue_clean, df_date_revenue_runtime_clean

