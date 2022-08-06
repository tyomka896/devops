# DevOps Инженер 2022

Выполнение задач по курсу *DevOps Инженер 2022*

# Урок 7 - Docker Compose

### Задание

С помощью контейнерного оркестратора docker-compose поднять 2 сервиса: сборочный и продовый. В сборочном сервисе должна происходить сборка Java приложения. В продовом сервисе - запуск приложения. Продовый образ должен быть минимальным по размеру.

### Подготовка

Создать файл `.env` и заполнить параметр *APP_PORT*:

```bash
cp .env.example .env
```

Приложение будет доступно по адресу `http://localhost:{APP_PORT}`

### Запуск приложения

Запуск:

```bash
docker-compose up -d --build
```

Размер образов:

```bash
devops_app:latest       193MB
devops_server:latest    23.5MB
```

### Сборка приложения

Запуск:

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

Размер образов:

```bash
devops_server:latest    23.5MB
```