from Models import *


class CurriculumVitae:
    def __init__(self, cv_hash):
        self.header = None
        self.cv_hash = cv_hash

        self.items = {}
        self.item_types = []

    def add(self, item: CvItem):
        if type(item) is CvHeaderItem:
            self.header = item
            return

        if type(item) not in self.item_types:
            self.item_types.append(type(item))
            self.items[type(item)] = []

        self.items[type(item)].append(item)
