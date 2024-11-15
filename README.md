# Cinema Treasure Hunt: A Global Quest to Unearth the Hidden Gems of the Film Industry

## Abstract
Our project is a cinematic treasure hunt, guided by clues from a mysterious fifth team member (the big brain who is missing) who leads the “4bigbrains” crew across the global film landscape. Each clue reveals a step toward the ultimate treasure: a formula for creating a successful film, based on our understanding of how regional differences in economics, culture, and creativity shape the movie industry worldwide. 

Through data on the movie industry—like box office revenues, actors' characteristics, movie genres, storytelling themes—and data on GDP, we seek to uncover how distinct regions contribute their unique perspectives to cinema. By following these clues, we piece together the story of a global industry that reflects the diverse identities of each region, forming a true cinematic tapestry.


## Research Questions

### Clue 1: “The world is vast, but which lands stand out on the cinematic map? Seek out the top representatives from each region.”
- From the exploratory analysis, which countries best represent the major regions of the world for our hunt?

### Clue 2: “Seek out the lands of production giants—where movies are born in abundance.”
- How has the production of films in different countries changed over time?
- Are certain regions emerging as new film production hubs?

### Clue 3: "Where there’s gold, there’s a story. Find the lands where films rake in riches.”
- Which regions generate the highest box office revenues, and how does this relate to their production volume?

### Clue 4: “Does wealth bring cinema’s fortune? The numbers may hold the answer.”
- How does a country’s GDP correlate with its film production and box office success?

### Clue 5: “Look closer at the stories themselves; what do different lands dream about?”
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
- **Goal:** Extract and compare themes within movie plots to analyze thematic differences by region.
- **Current Approach:** Applying LDA to the Stanford CoreNLP-Processed Summaries for word extraction.
- **Future Consideration:** Working directly with raw plot summaries, which would require preprocessing steps like tokenization, stop word removal, and lemmatization.

### LDA Analysis Breakdown:
1. **General Themes by Region:**
   - Identify broad thematic trends dominating each region.
2. **Genre-Specific Themes:**
   - Focus on themes within genres (e.g., comparing horror films in the U.S. vs. Asia) to explore how different cultures approach similar types of stories.


## Proposed Timeline

### **Week 10-11:**
- Clue 1: Finalize the exploratory data analysis.
- Clue 2/3/4: Finalize the data analysis on the 6 selected countries.
- Clue 5: Complete initial LDA analysis on general storytelling themes by country.

### **Week 12:**
- Clue 5: Conduct genre-specific LDA analysis to uncover thematic patterns within genres across different regions.
- Clue 4: Conduct correlation analysis with GDP to examine relationships between economic factors and film metrics like major themes.

### **Week 13:**
- Discover Jekyll and write our data story.

### **Week 14:**
- Milestone P3.


## Organization Within the Team
- Clue 1 (Guilhem): Identify the six best representative countries across major regions using exploratory analysis. Select based on production volume, box office success, and thematic variety.
- Clue 2 (Julie): Analyze which countries are the production giants over time. Examine trends to identify any emerging hubs in global film production.
- Clue 3 (Adrien): Investigate box office revenue by region. Determine if countries with high production also experience box office success, and explore revenue trends.
- Clue 4 (Ines): Assess the relationship between GDP and success in the film industry. Analyze whether higher GDP correlates with greater production and revenue or if there are exceptions. Look at potential correlation between GDP and themes.
- Clue 5 (Romain): Conduct LDA thematic analysis on plot summaries to reveal prominent storytelling themes by country. Focus on understanding cultural nuances in cinematic themes across regions.


## Questions for TAs
1. Is it acceptable to run our LDA on the Stanford CoreNLP-Processed Summaries (628 MB), or would it be better to preprocess the raw plot summaries ourselves for optimal results?


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
The directory structure of new project looks like this:

```bash
├── data                      <- Folder with project data files
│
├── src                       <- Folder with source code
│   └── utils                 <- Subfolder for utility functions
│       └── cleaning.py       <- File containing the cleaning functions
│
├── results.ipynb             <- Notebook showing the results
│
├── .gitignore                <- List of files ignored by git
├── requirements.txt          <- File for installing Python dependencies
└── README.md
```
