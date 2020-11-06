# from bs4 import BeautifulSoup
# import requests
import mechanize
import re

page = mechanize.Browser()
page.open("https://www.mercadolivre.com.br/")
response1 = page.follow_link(text_regex=r"cheese\s*shop", nr=1)
print(page.title())
print(response1.geturl())
print(response1.info())
print(response1.read())
