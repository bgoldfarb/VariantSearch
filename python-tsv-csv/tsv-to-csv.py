
import pandas as pd 

tsv_file='./data/variants.tsv'
csv_table=pd.read_table(tsv_file,sep='\t')
csv_table.to_csv('csv_data.csv',index=False)