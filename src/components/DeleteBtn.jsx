import { useTranslation } from 'react-i18next';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

function DeleteBtn({ msg, alertMsg,onDelete }) {
  const { t } = useTranslation();
   return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size='lg' className={"cursor-pointer"}>
          <Trash2 className="w-4 h-4 mr-2" />
          {t("deleteBtn.delBtn")}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {msg}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {alertMsg}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t("deleteBtn.cancelBtn")}</AlertDialogCancel>

          <AlertDialogAction
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            {t("deleteBtn.delBtn")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteBtn