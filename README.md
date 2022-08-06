# DevOps Инженер 2022

Выполнение задач по курсу *DevOps Инженер 2022*

# Урок 8 - Ansible

### Задание

Написать playbook, который подготавливает борочное и продовое окружение на 2-х нодах. На сборочной ноде производится сборка проекта, на продовой - запуск.

### Запуск

Основной запуск:

```bash
ansible-playbook main-playbook.yml
```

Установка Docker на машине:

```bash
ansible-playbook install-docker.yml
```
