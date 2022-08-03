# DevOps Инженер 2022

Выполнение задач по курсу *DevOps Инженер 2022*

# Урок 7 - Docker Compose

Создать файл `.env` и заполнить параметр *APP_PORT*:

```bash
cp .env.example .env
```

Приложение будет доступно по адресу `http://localhost:{APP_PORT}`

## Запуск приложения

Запуск:

```bash
docker-compose up -d
```

Размер образов:

```bash
devops_app:latest       541MB
devops_server:latest    23.5MB
```

## Сборка приложения

Запуск:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

Размер образов:

```bash
devops_server:latest    24.2MB
```