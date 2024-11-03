from django.db import models


class RequestData(models.Model):
    request_type = models.IntegerField(unique=True)
    message = models.TextField()

    def __str__(self):
        return f"{self.request_type}: {self.message}"
# Create your models here.
class ExpResult(models.Model):
    exp_id = models.IntegerField()
    index =  models.IntegerField()
    self_val = models.TextField()
    computer_val = models.TextField()
    reaction_time = models.TextField()
    time = models.TextField(null=True)
    option = models.TextField() 
    other_option = models.TextField() 
    inputValue = models.TextField()
    qinmidu = models.TextField()
    # time = models.DateTimeField(null=True) 
    def __str__(self):
        return f"实验{self.exp_id} 实验次数:{self.index} 玩家:{self.self_val} 电脑:{self.computer_val} 反应时间:{self.reaction_time} "