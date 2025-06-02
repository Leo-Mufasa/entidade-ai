@echo off
REM Verifica se há mudanças a serem comitadas
git status --porcelain > temp_changes.txt
for %%A in (temp_changes.txt) do (
    set /p FIRSTLINE=<temp_changes.txt
)
if "%FIRSTLINE%"=="" (
    echo Nada para subir. Nenhuma alteração detectada.
    del temp_changes.txt
    pause
    exit /b
)
del temp_changes.txt

REM Gerar timestamp automático
set DATETIME=%date:~6,4%-%date:~3,2%-%date:~0,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set DATETIME=%DATETIME: =0%

REM Commit com mensagem automática
git add .
git commit -m "update %DATETIME%"
git push

REM Log da operação
echo Commit feito em %DATETIME% >> git_upload_log.txt

pause
