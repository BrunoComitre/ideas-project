import threading


def worker():
    print(threading.current_thread().name)
    print(threading.get_ident())


threading.Thread(target=worker).start()
threading.Thread(target=worker, name='foo').start()
