# Cinema Treasure Hunt: A Global Quest to Unearth the Hidden Gems of the Film Industry

## Abstract
Welcome to the *Cinematic Treasure Hunt*, an adventure that takes you across the global cinematic landscape. Guided by the cryptic clues left by the mysterious 5th Big Brain, you’ll explore how different regions influence the film industry, from economic factors to storytelling trends and cultural nuances. Step by step, you’ll solve riddles and piece together fragments of a larger puzzle. Each clue brings you closer to unlocking the treasure chest at the heart of this thrilling quest. 
Are you ready to join the hunt and uncover the final discovery? 
[Start the Cinematic Treasure Hunt](https://epfl-ada.github.io/ada-2024-project-4bigbrains/)
## Research Questions

### Clue 1: Top representatives
- "The world is vast, but which lands stand out on the cinematic map? Seek out the top representatives from each region."
- From the exploratory analysis, which countries best represent the major regions of the world for our treasure hunt?

### Clue 2: GPD impact
- "As economies rose and fell, the silver screen reflected their fortunes, weaving a tale of cinema's evolution shaped by the ebb and flow of global GDP."
- How does a country’s GDP correlate with its film production and box office success?

### Clue 3: Actors gender
- "Where there’s talent, there’s a story. Discover how the gender of actors shapes the narrative."
- What is the optimal ratio of male to female actors in a cast to maximize box office revenues?

### Clue 4: The genre secret: Fortune or Fiasco?
- "Thrillers, dramas, or comedies—does the genre of a film holds the key to its success?"
- Is there a pattern in the distribution of film genres?

### Clue 5: The Stories They Dream About
- "Look closer at the stories themselves; what do different lands dream about?"
- What storytelling themes dominate in different regions, and how do these vary by genre?


## Additional Datasets
In addition to the given Movie Metadata (`movie.metadata.tsv`, `character.metadata.tsv`), we use:
1. **Stanford CoreNLP-Processed Summaries (628 MB):** Plot summaries from the metadata dataset, processed for linguistic analysis (tagging, parsing, named entity recognition, coreference). This file should be located in the parent directory of the GitHub repository on the local computer (`../data/corenlp_plot_summaries.tar`).
2. **Global GDP Data (`GDP.csv`):** Annual GDP per capita in constant US$ (2015) by country, used to analyze economic context in relation to the movie industry.

---

## Methods

### Data Cleaning
We created 4 cleaned datasets for different applications:
1. **`df_date_clean`:**
   - All movies with valid release dates.
   - Useful for analyzing the timing and distribution of movie releases across years and countries.
2. **`df_date_revenue_clean`:**
   - Movies with both release dates and box office revenue.
   - Useful for examining relationships between movie release years and revenue, allowing insights into revenue trends over time.
3. **`df_date_revenue_runtime_clean`:**
   - Movies with valid release dates, box office revenue, and movie runtime cleaned.
   - Useful for examining the relation between runtime and box office revenues of films.
4. **`merged_df`:**
   - Movies with valid release dates and actors' characteristics.
   - Useful for examining how actor characteristics such as gender or age influence the movie industry.

### General Exploratory Data Analysis
The exploratory data analysis (EDA) will enable us to select six geographically diverse countries as representative examples of global cinema, based on different factors of their film production significance.

### Data Analysis on the 6 Selected Countries
1. **Country-Level Production Analysis:**
   - Assess the volume of films produced over time within each selected country.
2. **Box Office Performance and Revenue Trends:**
   - Analyze box office revenue across time, genres, and release years to identify successful genres or periods for each country.
3. **Correlation Analysis Between GDP and Movie Industry:**
   - Incorporate GDP data to determine if economic strength correlates with film production volume or box office success.

### Latent Dirichlet Allocation (LDA) for Thematic Analysis
1. **General Themes by Region:**
   - Identify broad thematic trends dominating each region.
2. **Genre-Specific Themes:**
   - Focus on themes within genres (e.g., comparing horror films in the U.S. vs. Asia) to explore how different cultures approach similar types of stories.

## Contributions of all group members
Every member of the team have been working on a specific part of the project, including the code, result.py and the data story of their respective part.
- Clue 1 (Inès and Julie): Identify the six best representative countries across major regions using exploratory analysis. Select based on production volume, box office success, and thematic variety.
- Clue 2 (Julie): Analyze which countries are the production giants over time. Examine trends to identify any emerging hubs in global film production.
- Clue 3 (Inès): Investigate box office revenue by region. Determine if countries with high production also experience box office success, and explore revenue trends.
- Clue 4 (Ines): Assess the relationship between GDP and success in the film industry. Analyze whether higher GDP correlates with greater production and revenue or if there are exceptions. Look at potential correlation between GDP and themes.
- Clue 5 (Guilhem and Romain): Conduct LDA thematic analysis on plot summaries to reveal prominent storytelling themes by country. Focus on understanding cultural nuances in cinematic themes across regions.

## Quickstart

### Clone Project
```bash
git clone https://github.com/epfl-ada/ada-2024-project-4bigbrains.git
cd ada-2024-project-4bigbrains
```

### Install Requirements
```bash
pip install -r requirements.txt
```

### Add Dataset Manually
Download the file corenlp_plot_summaries.tar from https://www.cs.cmu.edu/~ark/personas/.
Place the file in the data folder.

## Project Structure
The directory structure of project looks like this:

```bash
├── data                      <- Folder with project data files
│
├── docs                      <- Folder containing all resources needed for the website creation
│ 
├── src                       <- Folder with source code
│   └── utils                 <- Subfolder for utility functions
│       ├── cleaning.py       <- File containing the cleaning functions
│       └── LDA_functions.py  <- File containing LDA-related functions
│
│
├── LDA.ipynb                 <- Notebook for LDA analysis
│
├── results.ipynb             <- Notebook showing the results
│
├── .gitignore                <- List of files ignored by git
├── requirements.txt          <- File for installing Python dependencies
└── README.md
```
