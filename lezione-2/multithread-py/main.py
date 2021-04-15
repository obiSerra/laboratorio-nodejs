#!/usr/bin/env python3

import requests
from bs4 import BeautifulSoup
import re
import time


def url_file_name(url):
    pg = re.sub(r'\?.*', '', url)
    pg = re.sub(r'\.html?$', '', pg)
    els = [e for e in pg.split('/') if e != '']
    return els[-1] + '.html'


def spider(url):
    r = requests.get(url, allow_redirects=True)
    open('./downloads/index.html', 'wb').write(r.content)

    soup = BeautifulSoup(r.content, 'html.parser')
    urls  = [a['href'] for a in soup.find_all("a") if 'href' in a.attrs and a['href'].startswith(url)]
    for u in urls:
        print(u)
        r = requests.get(u, allow_redirects=True)
        open('./downloads/' + url_file_name(u), 'wb').write(r.content)
    


if __name__ == "__main__":
    start_time = time.time()
    spider("https://www.repubblica.it/")
    print("--- %s seconds ---" % (time.time() - start_time))