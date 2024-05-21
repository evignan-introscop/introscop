# introscop
introscop site 2022 version

# Instructions for use:
Инструкция:
1. Зайти в GitHub и выбрать репозиторий introscop.
2. Открыть проект в code / Codespaces.
3. Выбрать новый или запустить существующий.
4. В TERMINAL запустить команду yarn. После запустить команду для запуска проекта yarn run start
5. Сделать необходимые изменения в проекте.
6. Ctrl + c и сделать сдедующие команды: 
    git add . 
    git commit -m “любое название комментария” 
    git push
7. Перейти в GitHub с репозиторием.
8. Выбрать code / Locale и выбрать DOWNLOAD ZIP (скачиваем проект локально в сжатом виде).
9. Открыть cPanel и загрузить скаченный проект (папку переимовать в new).
10. Распаковать проект (Extract)
11. Зайти в распакованную папку new, выбрать все имеющиеся в папке файлы ,папки и перенести в public_html папку.

Добавления на страницу  DEZVĂLUIREA INFORMAȚIEI:
Добавить в cPanel в папку uploads/docs нужный документ
Открыть проект в GitHub/Codespace src/pages/info, выбрать info.jsx
Сделать копию Элемента: 
            <a
              href="https://introscop.md/uploads/docs/ Название файла.pdf” 
              download
              target="_blank"
              rel="noreferrer"
              className={s.documents__item}
              data-aos="fade-up"
            >
              <div className={s.documents__item_wrap}>
                <img src={document} alt="document-icon" />
                <p className={s.documents__name}>
                Название ячейки
                </p>
              </div>
            </a>

Сделать копию элемента и добавить в конец списка таких же элементов