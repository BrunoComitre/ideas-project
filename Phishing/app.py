import requests
import couchdb
import os
import pprint
import re
import connexion
import nltk
import inflect
nltk.download('punkt')
nltk.download('stopwords')
from nltk import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
import re, string, unicodedata
from nltk.tokenize import word_tokenize


couchserver = couchdb.Server()
#user = 'admin'
#password = 'my secret password'
#couchserver = couchdb.Server('http://127.0.0.1:5984' % (user, password))
couchserver = couchdb.Server('http://127.0.0.1:5984')

database = 'teste_em_uso'
if database in couchserver:
    db = couchserver[database]
else:
    db = couchserver.create(database)
    

new_list = [id for id in db] # lista as 319 id

#assert True (expression)

doc_id = '09b6c81074c702328b86c5fd52000f2f'
doc = db[doc_id]  # or db.get(doc_id)
#print(doc)

tokenized_res = word_tokenize(str(doc))
#print(tokenized_res)

class NormalizeWords(object):
    
    def __init__(self, words):
        self._words = words
    
    @property
    def words(self):
        return self._words
    
    def to_lowercase(self): # Converte minusculo
        self.words_lowercase = [word.lower() for word in self.words]
        return self.words_lowercase
    
    def remove_punctuation(self): # Remove pontuação
        self.without_punctuation = []
        for word in self.words_lowercase:
            new_word = re.sub(r'[^\w\s]', '', word)
            new_word = re.sub(r'\_', '', new_word)
            if new_word != '':
                self.without_punctuation.append(new_word)
        return self.without_punctuation

    def remove_stopwords(self): # Remove stopwords
        self.without_stopwords = []
        for word in self.without_punctuation:
            if word not in stopwords.words('english'):
                self.without_stopwords.append(word)

    def normalized(self):
        self.to_lowercase()
        self.remove_punctuation()
        self.remove_stopwords()
        return self.remove_stopwords

nws = NormalizeWords(tokenized_res)
normalized = nws.normalized()


#print('================================================')
#pattern = re.compile('(\w{1,40})')
#addresses = re.findall(pattern, str(req))
#for address in addresses: 
    #print(address)
#print('================================================')
#pattern = re.compile('u\wl')
#addresses = re.findall(pattern, str(db))
#for address in addresses: 
    #print(address)
#print('================================================')  


class KeywordEspecial(object):
    regexp = {
        ('cnpj_pattern',): re.compile(r'[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}'),
        ('cpf_pattern',): re.compile(r'[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}'),
        ('rg_pattern',): re.compile(r'(^(\d{2}\x2E\d{3}\x2E\d{3}[-]\d{1})$|^(\d{2}\x2E\d{3}\x2E\d{3})$)'),
        ('cel_pattern',): re.compile(r'(9[0-9]{4}(-| )[0-9]{4}|9[0-9]{8})'),
        ('fone_pattern',): re.compile(r'([0-9]{4}(-| )[0-9]{4}|[0-9]{8})'),
        ('account_pattern',): re.compile(r'[0-9]{4,8}(-| )[0-9]{1}'),
        ('card_pattern',): re.compile(r'[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}|[0-9]{16}'),
        ('cep_pattern',): re.compile(r'[0-9]{5}-[0-9]{3}'),
        ('password_pattern',): re.compile(r"[a-zA-Z0-9_!@#\$&\*]{8}"),
        ('IPV6',): re.compile(r'((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?'),
        ('IPV4',): re.compile(r'(?<![0-9])(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(?![0-9])'),
        ('IP',): re.compile(r'(?:%{IPV6}|%{IPV4})'),
    }

    def __init__(self):
        self.complemento = []

    def read(self, line):
        for attrs, pattern in Despacho.regexp.iteritems():
            m = pattern.match(line)
            if m:
                for groupn, attr in enumerate(attrs):
                    # special case complemento:
                    if attr == 'complemento':
                        self.complemento.append(m.group(groupn + 1))
                    else:
                        # set the attribute on the object
                        setattr(self, attr, m.group(groupn + 1))

    def __repr__(self):
        # defines object printed representation
        d = {}
        for attrs in self.regexp:
            for attr in attrs:
                d[attr] = getattr(self, attr, None)
        return pprint.pformat(d)

def process(rpi):
    group = False
    for line in rpi:
        if line.startswith('Noc.'):
            group = True
            d = KeywordEspecial()        
        if not line.strip() and group: # linha vazia - fim do bloco
            yield d
            group = False
            d.read(line)

def main():
    for desp in process(doc):
        print(desp) # print direto
        print('-' * 20)
    return 0

if __name__ == '__main__':
    main()


keyword_list = ['expires', 'true', 'false', 'admin', 'accept', 'connection', 'found', 'not', 'file', 'adress', 'configure']
def encontrar(elemento):
    lista_pos = [] # vamos salvar nesta nova lista
    for i, elem in enumerate(normalized):
        for elem in range (i): #keywolist
            if elem in keyword_list[i]:
                lista_pos.append((i)) # adiciona cada índice na lista
    return lista_pos # removemos os breaks, precisa procurar na lista inteira
r = encontrar('accept')
print(r)
print(lista_pos)




from collections import Counter
def popularidade (texto, palavras):
    texto = texto.split()
    palavras = palavras.split() # tirar virgulas
    lista = []

    for p in palavras:
        for t in texto:
            if p == t:
                lista.append(t)
    return Counter(lista)
#print(popularidade(str(normalized),keywolist))
